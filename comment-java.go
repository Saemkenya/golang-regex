package main

import (
	"fmt"
	"io/ioutil"
	"regexp"
	// "os"
)

func main() {
	jsBytes, err := ioutil.ReadFile("./javascript.tsx")
	if err != nil {
		fmt.Println(err)
	}
	// fmt.Println(string(jsBytes))

	// importStatement := regexp.MustCompile(`import(\s)((.*)(\s)from(\s)(.*);|((.*\n){0,})\}(\s)from(\s)(.*);)`)
	
	constStatement := regexp.MustCompile(`const(\s)\[(.*)\](\s)=(\s)(.*)\(\);`)
	// foundConsts := constStatement.FindAllString(string(jsBytes), -1)

	adjustedJS := constStatement.ReplaceAllString(string(jsBytes), `/*$0*/`)
	fmt.Println(adjustedJS)

	// adjustdJs := importStatement.ReplaceAll(jsBytes, []byte(`/*$0*/`))

	// ioutil.WriteFile("./new_javascript.tsx", adjustdJs, os.ModePerm)

	// adjustdJs := importStatement.ReplaceAllString(string(jsBytes), `/*$0*/`)
	// fmt.Println(adjustdJs)
	

	/*
	foundStatements := importStatement.FindAllString(string(jsBytes), -1)
	for _, found := range foundStatements {
		fmt.Println(found)
	}
	*/
}