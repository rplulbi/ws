package main

import "fmt"

func main() {
	s := []int{7, 18, 42}
	fmt.Println(s)

	for i := range s {
		fmt.Println(i)
	}

	for i, v := range s {
		fmt.Println(i, v)
	}

}
