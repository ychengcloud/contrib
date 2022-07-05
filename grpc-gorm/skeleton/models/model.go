package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/go-playground/validator/v10"
)

var (
	validate = validator.New()

	ErrAccountNotFound = errors.New("account not found")
	ErrEmailExists     = errors.New("email already exists")
	ErrNoDatabase      = errors.New("no database connection details")
	ErrNoPasswordGiven = errors.New("a password is required")
	ErrBadRequest      = errors.New("bad request")
)

type FilterLogicOp string

const (
	FilterLogicOpOr  FilterLogicOp = "OR"
	FilterLogicOpAnd FilterLogicOp = "AND"
)

var FilterLogicOpAll = map[string]string{
	"Eq":         "= ?",
	"Not":        "<> = ?",
	"In":         "IN (?)",
	"Gt":         "> ?",
	"Gte":        ">= ?",
	"Lt":         "< ?",
	"Lte":        "<= ?",
	"Contains":   "LIKE (?)",
	"StartsWith": "LIKE (?%)",
	"EndsWith":   "LIKE (%?)",
}

type JSON json.RawMessage

// 实现 sql.Scanner 接口，Scan 将 value 扫描至 Jsonb
func (j *JSON) Scan(value interface{}) error {
	bytes, ok := value.([]byte)
	if !ok {
		return errors.New(fmt.Sprint("Failed to unmarshal JSONB value:", value))
	}

	result := json.RawMessage{}
	err := json.Unmarshal(bytes, &result)
	*j = JSON(result)
	return err
}

// 实现 driver.Valuer 接口，Value 返回 json value
func (j JSON) Value() (driver.Value, error) {
	if len(j) == 0 {
		return nil, nil
	}
	return json.RawMessage(j).MarshalJSON()
}
