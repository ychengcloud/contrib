package domain

import (
	"testing"

	entsql "entgo.io/ent/dialect/sql"
	"github.com/stretchr/testify/require"
)

type testIntInput struct {
	Eq *string  `json:"Eq"`
	In []string `json:"In"`
}

func (ti *testIntInput) Apply() *entsql.Predicate {
	var preds []*entsql.Predicate
	if ti.Eq != nil {
		preds = append(preds, entsql.EQ("id", *ti.Eq))
	}
	if ti.In != nil {
		v := make([]any, len(ti.In))
		for i := range v {
			v[i] = ti.In[i]
		}
		preds = append(preds, entsql.In("id", v...))
	}

	switch len(preds) {
	case 0:
		return nil
	case 1:
		return preds[0]
	default:
		return entsql.And(preds...)
	}
}

type testStringInput struct {
	Eq         *string  `json:"Eq"`
	In         []string `json:"In"`
	Contains   *string  `json:"Contains"`
	StartsWith *string  `json:"StartsWith"`
	EndsWith   *string  `json:"EndsWith"`
}

func (ti *testStringInput) Apply() *entsql.Predicate {
	var preds []*entsql.Predicate
	if ti.Eq != nil {
		preds = append(preds, entsql.EQ("name", *ti.Eq))
	}
	if len(ti.In) > 0 {
		v := make([]any, len(ti.In))
		for i := range v {
			v[i] = ti.In[i]
		}
		preds = append(preds, entsql.In("name", v...))
	}
	if ti.Contains != nil {
		preds = append(preds, entsql.Contains("name", *ti.Contains))
	}

	if ti.StartsWith != nil {
		preds = append(preds, entsql.HasPrefix("name", *ti.StartsWith))
	}

	if ti.EndsWith != nil {
		preds = append(preds, entsql.HasSuffix("name", *ti.EndsWith))
	}

	switch len(preds) {
	case 0:
		return nil
	case 1:
		return preds[0]
	default:
		return entsql.And(preds...)
	}
}

func TestFilter(t *testing.T) {
	tests := []struct {
		name      string
		input     func() *FilterInput
		wantQuery string
		wantArgs  []any
	}{
		{
			name: "eq",
			input: func() *FilterInput {
				id := "test"
				return &FilterInput{
					Filters: []Filter{
						&testIntInput{
							Eq: &id,
							In: []string{"name1", "name2"},
						},
					},
				}
			},
			wantQuery: "SELECT * FROM  WHERE `id` = ? AND `id` IN (?, ?)",
			wantArgs:  []any{"test", "name1", "name2"},
		},
		{
			name: "contains",
			input: func() *FilterInput {
				name := "test"
				return &FilterInput{
					Filters: []Filter{
						&testStringInput{
							Contains: &name,
						},
					},
				}

			},
			wantQuery: "SELECT * FROM  WHERE `name` LIKE ?",
			wantArgs:  []any{"%test%"},
		},
		{
			name: "startsWith",
			input: func() *FilterInput {
				name := "test"
				return &FilterInput{
					Filters: []Filter{
						&testStringInput{
							StartsWith: &name,
						},
					},
				}

			},
			wantQuery: "SELECT * FROM  WHERE `name` LIKE ?",
			wantArgs:  []any{"test%"},
		},
		{
			name: "endsWith",
			input: func() *FilterInput {
				name := "test"
				return &FilterInput{
					Filters: []Filter{
						&testStringInput{
							EndsWith: &name,
						},
					},
				}

			},
			wantQuery: "SELECT * FROM  WHERE `name` LIKE ?",
			wantArgs:  []any{"%test"},
		},
		{
			name: "and",
			input: func() *FilterInput {
				id := "test"
				return &FilterInput{
					AND: []*FilterInput{
						{
							Filters: []Filter{
								&testIntInput{
									Eq: &id,
								},
								&testIntInput{
									Eq: &id,
								},
							},
						},
					},
				}

			},
			wantQuery: "SELECT * FROM  WHERE `id` = ? AND `id` = ?",
			wantArgs:  []any{"test", "test"},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			preds := test.input().Apply()
			require.NotNil(t, preds)

			builder := entsql.Dialect("mysql")
			query, args := builder.Select().Where(preds).Query()
			require.Equal(t, test.wantQuery, query)
			require.Equal(t, test.wantArgs, args)
		})
	}
}
