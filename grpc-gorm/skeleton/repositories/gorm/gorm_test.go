package repogorm

import (
	"database/sql/driver"
	"reflect"
	"regexp"
	"strings"
	"testing"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/utils/tests"
	"gotest.tools/assert"
)

func checkWhere(t *testing.T, where *clause.Where, result string, vars []interface{}) {
	var db, _ = gorm.Open(tests.DummyDialector{}, nil)
	stmt := &gorm.Statement{DB: db, Table: "", Schema: nil, Clauses: map[string]clause.Clause{}}
	where.Build(stmt)

	if strings.TrimSpace(stmt.SQL.String()) != result {
		t.Errorf("SQL expects %v got %v", result, stmt.SQL.String())
	}

	if !reflect.DeepEqual(stmt.Vars, vars) {
		t.Errorf("Vars expects %+v got %v", stmt.Vars, vars)
	}
}

func escape(query string) string {
	rows := strings.Split(query, "\n")
	for i := range rows {
		rows[i] = strings.TrimPrefix(rows[i], " ")
	}
	query = strings.Join(rows, " ")
	return strings.TrimSpace(regexp.QuoteMeta(query)) + "$"
}

type AnyUUID struct{}

// Match satisfies sqlmock.Argument interface
func (a AnyUUID) Match(v driver.Value) bool {
	_, err := uuid.Parse(v.(string))
	if err != nil {
		return false
	}
	return true
}

type AnyTime struct{}

// Match satisfies sqlmock.Argument interface
func (a AnyTime) Match(v driver.Value) bool {
	_, ok := v.(time.Time)
	return ok
}
