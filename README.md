# Movie App 2021

React JS

## 개요

React JS를 사용하여 영화 소개 사이트를 만들어 보았다.

## 실행화면

- 처음 render가 호출되면 componentDidMount가 호출되면서 비동기 함수인 getMovie()가 실행되는 동안 대기 화면이 뜬다.

![캡처21](https://user-images.githubusercontent.com/63761624/116852966-3acf3d80-ac30-11eb-8d63-2e5a44541cef.png)

- 대기상태가 끝난 실행 화면

![캡처20](https://user-images.githubusercontent.com/63761624/116852826-0065a080-ac30-11eb-9a89-2ddb2b8a539a.PNG)

- 영화 리스트에 마우스를 hover 하면 transform, transition 효과가 일어남

![캡처22](https://user-images.githubusercontent.com/63761624/116853154-88e44100-ac30-11eb-8e0c-dfd527c8d97d.png)

## 사용언어 및 라이브러리

- 라이브러리: React JS
- 언어: javascript, JSX 문법

* YTS의 API 사용 (yts 사이트의 json 주소는 자주 바뀌어서 오류가 나므로 아래 것을 사용)
  **https://yts-proxy.nomadcoders1.now.sh/list_movies.json**

## Point Of Interest

- 받아온 argument의 genres.map() 에서 key값을 주지 않아서 생긴 오류 + map에서 제공할 id가 따로 없을 때

       <ul className="movie__genres">{ genres.map( genre => ( <li  className="genres__genre">{genre}</li> ))}</ul>

  ![Untitled](https://user-images.githubusercontent.com/63761624/116851766-fcd11a00-ac2d-11eb-82db-0afc147ed77d.png)

해결
: map function은 또 다른 argument(인자)를 우리에게 제공한다. 하나는 현재의 item이고, 다른 하나는 item number.

        <ul className="movie__genres">{ genres.map( (genre, index) => ( <li key={index} className="genres__genre">{genre}</li> ))}</ul>
