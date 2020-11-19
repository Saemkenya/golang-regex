package main

import (
	"fmt"
	"regexp"
)

func main() {
    r := regexp.MustCompile(`(?P<fname>\w+)(?P<fname0>\w+)(?P<fname1>\w+)-(?P<lname>\w+)(?P<lname0>\w+)(?P<lname2>\w+)`)
    fmt.Printf("%#v\n", r.FindStringSubmatch(`Donald-Akama`))
    fmt.Printf("%#v\n", r.SubexpNames())
}



