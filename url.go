package main

import (
    // "bufio"
    "fmt"
    // "io"
    // "os"
	// "strings"
	"net/url"
    "encoding/json"
    "regexp"
)



/*
 * Complete the 'ioWrapper' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING route
 *  2. STRING url
 */
 
type UrlParams struct {}
 
type UrlRouter struct {
    Scheme      string `json:"scheme"`
    Host        string `json:"host"`
    Path        string `json:"path"`
    Parameters  url.Values `json:"parameters,omitempty"`
}


func ioWrapper(route string, urlStr string) string {
    // re := regexp.MustCompile(`^(https?)://(\w+\.\w+\.\w+)/(\w+)$`)
    re := regexp.MustCompile("(\\w+)\\.(\\w+)\\.(\\w+)")

    parts := re.FindStringSubmatch(urlStr)

    fmt.Println(re.String())
    fmt.Println(parts)

    for _, i := range parts {
        fmt.Println(i)
    }

	parsedUrl, err := url.Parse(urlStr)

	if err != nil {
		return err.Error()
	}
    
    urlRouter := &UrlRouter{
        Scheme: parsedUrl.Scheme,
        Host:   parsedUrl.Host,
        Path: parsedUrl.Path,
        Parameters: parsedUrl.Query(),    
    }
    
    router, err := json.Marshal(urlRouter)
    
    if err != nil {
        return err.Error()
    }
    
    return string(router)
}

func main() {
	url := "https://www.187ca.com/"
	route := "/"

    result := ioWrapper(route, url)

    fmt.Printf("result: %s", result)
}

