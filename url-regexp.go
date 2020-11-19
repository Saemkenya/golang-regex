package main

import (
	"fmt"
	"regexp"
)

func main() {
	str1 := `http://www.suon.co.uk/product/1/7/3/`
	str2 := `http://www.suon.co.uk/`

    // re := regexp.MustCompile(`^(https?)://(\w+\.\w+\.\w+)/(\w+)$`)

	re := regexp.MustCompile(`^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)`)
	fmt.Printf("Pattern: %v\n", re.String()) // print pattern
	// fmt.Println(re.MatchString(str1)) // true

	submatchall := re.FindAllString(str1,-1)
	for _, element := range submatchall {
		fmt.Println(element)
	}

	// htt, n := regexp.MatchString(`^(https?):\/\/`, str1)
	// fmt.Println(htt)
	// fmt.Println(n)

	res :=  re.Split(str1, -1)[1]
	res2 := re.Split(str2, -1)[1]

	fmt.Println(res)
	fmt.Println(res2)
}

