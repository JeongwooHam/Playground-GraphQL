![그림1](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7d1084c3-cf8a-4f1c-b131-7f4299db52a4)

## GraphQL

- a query language for your API
- API의 데이터에 대한 이해하기 쉬운 설명을 제공하고 클라이언트가 필요로 하는 것을 정확하게 요청할 수 있는 능력을 제공한다.
- REST API의 경우 HTTP 메소드와 엔드포인트를 사용해 원하는 데이터를 요청하지만 GraphQL의 경우 Query Language를 사용하여 데이터를 요청한다.
- 데이터를 묘사하고 ➡️ 클라이언트에서 필요한 데이터를 요청하고 ➡️ 서버에서 예측한 데이터를 받아온다.

### 🧐 왜 REST API를 두고 GraphQL을 사용할까?

> GraphQL의 장점

- 백엔드에서 REST API 개발을 마칠 때까지 기다리지 않아도 된다.
  - 프런트엔드와 백엔드가 전체 개발 프로세스를 병렬로 작업할 수 있게 해준다.
- over-fetching과 under-fetching을 막아준다.
  - **over-fetching**: 클라이언트에서 필요한 정보를 위해 여러 번의 요청을 보내야 한다. 실제 필요한 정보보다 더 많은 정보들을 받아와 불필요하게 네트워크 비용을 사용하게 될 수 있다.
  - **under-fetching**: 반대로 응답에 필요한 데이터가 부족하게 오는 것을 의미한다.
- 필요한 데이터를 만들기 위해 여러 번 요청을 보내야 하는 REST API와 달리 한 번의 요청으로도 데이터를 가져올 수 있게 된다.

> GraphQL의 단점

- 백엔드의 Schema와 Type을 지정해주어야 한다.
- REST API보다 데이터 캐싱이 까다롭다.
  - REST API의 경우 URL을 통해 리소스에 접근하기 때문에 리소스 URL이 식별자로 있어 리소스 수준에서 캐시가 가능하다.
  - GraphQL의 경우 동일한 엔티티에서 작동해도 각 쿼리가 다를 수 있어서 데이터 캐싱이 복잡할 수 있다.
  - 하지만 GraphQL 위에 구축된 대부분의 라이브러리가 효율적인 캐싱 매커니즘을 제공하고 있다!

## Express GraphQL Server 생성해보기

- postman으로 요청 시 아래와 같이 응답이 잘 오는 것을 확인할 수 있었다.

![스크린샷 2024-04-24 011740](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7ca82187-62b4-41eb-8fdf-93f7a1230e68)
![스크린샷 2024-04-24 011747](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/3fd979d7-b993-4514-b907-3346c95b9add)

- 아래의 설정을 통해 GraphQL이 제공하는 IDE인 **GraphiQL**을 사용하여 어떤 데이터를 요청했는지 확인할 수 있다.

```js
app.use(
  "/graphql/",
  graphqlHTTP({
    // ...
    graphiql: true,
  })
);
```

![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/37dbcec7-a433-4465-9efe-cab0f3877937)
