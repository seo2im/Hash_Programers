# Best album

### Problem Explain

[programers](https://programmers.co.kr/learn/courses/30/lessons/42579)

### solution

hash structure
```javascript
{
	"genre" : {
		"total" : "# of play on genre",
		"music" : [
			{
				"id" : "index of music",
				"play" : "# of play on music"
			}
		]
	}
}
```

Every genres music in hash must be sorted. Get two music, if only one, get one.
