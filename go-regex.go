package main

import (
	"fmt"
	"regexp"
)

func main() {
    // r := regexp.MustCompile(`(?P<scheme>https?)://(?P<host>(?P<protocal>\w+\.)?\w+\.\w+)(?P<slash>\/)?(?P<path>\w+)?`)
	// parts := r.FindStringSubmatch(`https://www.golang.org/developer`)
	// // parts := r.FindStringSubmatch(`https://www.github.com/`)
	// // parts := r.FindStringSubmatch(`https://www.youtube.com`)
	// // parts := r.FindStringSubmatch(`https://twitter.com`)
	// for i, part := range parts {
	// 	fmt.Printf("%d:%#v\n", i, part)
	// }
	// fmt.Printf("%#v\n", r.SubexpNames())

	txt := `https://www.golang.org/developer
			https://www.github.com/
			https://youtube.com/
			http://www.twitter.com/user`

	regex := *regexp.MustCompile(`(?s)(https?)://((\w+\.)?\w+\.\w+)(\/)(\w+)?`)
	res := regex.FindAllStringSubmatch(txt, -1)
	for i := range res {
		fmt.Printf("scheme: %s | host: %s | protocal %s | slash: %s | path: %s\n", res[i][1], res[i][2], res[i][3], res[i][4], res[i][5])
	}
}


