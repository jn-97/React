# Getting Started with Create React App

1. npx create-react-app [프로젝트 명]

2. cd [프로젝트 명]

3. npm install
> package.json 파일을 살펴보고, 프로젝트 폴더에 필요한 모든 패키지와 개발에 필요한 것들을 설치

4. npm start

## index.js
- 프로그램을 실행하면 가장 먼저 실행되는 파일

## src -> components 폴더 생성
- App.js 는 이동하지 않는다. (root component)
    - react에서는 컴포넌트 트리가 있는데, 맨 위에 가장 중요한 App 컴포넌트가 있기 때문

## 컴포넌트 순서
1. Html 코드를 리턴하는 함수인 컴포넌트를 생성
2. export default [컴포넌트 명]; 으로 내보낸다.
3. import [컴포넌트 명] from ['경로'];
    - 컴포넌트를 사용하고 싶은 파일에서 import한 후 사용