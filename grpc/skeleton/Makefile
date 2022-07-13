app = server
BUF_VERSION:=1.4.0

.PHONY: install
install:
	go get \
		google.golang.org/protobuf/cmd/protoc-gen-go \
		google.golang.org/grpc/cmd/protoc-gen-go-grpc \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2


# 或许需要网络代理
	curl -sSL && \
    	"https://github.com/bufbuild/buf/releases/download/v${BUF_VERSION}/buf-$(shell uname -s)-$(shell uname -m)" && \
    	-o "$(shell go env GOPATH)/bin/buf" && && \
  	chmod +x "$(shell go env GOPATH)/bin/buf"

.PHONY: gen
gen:
	go run github.com/ychengcloud/cre/cmd/cre generate -c ./cre.yaml

.PHONY: mock
mock:
	mockgen -package repo -destination repository/mock/repository.go   -source repository/repository.go

.PHONY: proto
proto:
	# protoc -I api/proto ./api/proto/* --go_out=plugins=grpc:api/proto
	cd proto && \
	buf mod update && \
	buf build && \
	cd .. && \
	buf generate

.PHONY: run
run:
	go run ./cmd ;

.PHONY: watch
watch:
	gowatch

.PHONY: test
test: 
	go test -v ./$(app)/... -covermode=count -coverprofile=dist/cover-$(app).out ;

.PHONY: build
build: 
	go mod tidy; \
	GOOS=linux GOARCH="amd64" go build -o dist/$(app)-linux-amd64 ./cmd ; 

.PHONY: cover
cover: test
	go tool cover -html=dist/cover-$(app).out; 

.PHONY: lint
lint:
	golint ./...
	buf lint
	buf breaking --against 'https://github.com/johanbrandhorst/grpc-gateway-boilerplate.git#branch=master'



all: lint cover install gen proto
