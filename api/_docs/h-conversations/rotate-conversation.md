---
title: Rotate Conversation
category: Conversation
order: 7
---

Expire old `code_url` and change the `code_url` of a conversation.

###### POST /conversations/:id/rotate

| name | String: support by "GROUP" only |
| announcement | String: support by "GROUP" only |

```
// cURL Example
curl -i -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzQyNTAwNTYsImlhdCI6MTUyNjQ3NDA1NiwianRpIjoiMmUyMTFmMmQtOTNmZC00ODBiLWIxMDctZGNmMzg3NTZmZDdhIiwic2lkIjoiMTM4NDMyNmQtMTQzNi00NWI2LWI3NGQtY2ZhNjNkNDM2ZmRmIiwic2lnIjoiODZhMWYxMmFhYjQ0MGE5NmM3NWM1NmY2ZDI2Mzk3NTIxNWJlZDE2YjI4YmYxZTk4MTc4NGRjODVhNzc2M2I2OSIsInVpZCI6IjhkY2Y4MjNkLTllYjMtNGRhMi04NzM0LWYwYWFkNTBjMGRhNiJ9.b8jI-GwGqQhOu2B1vMtB5zox8O9OAuzrHZssw8LtLhTdMnskut3zi0WWkiUPQ8gyTGxzIUlkQC1gFOR0Ul4adZHaGGQ9T77RQecpEnDBGA26zdWCn2IygKDCjOEO-i9xHa8uNCqPLhyEdShSEZk3dEFiw0eZ2fjbyWiVzRKupwo" "https://api.mixin.one/conversations/928c5c40-769c-3e97-8387-fb1ae0645311/rotate" -X POST
```

```
{{ site.data.conversation.data }}
```
