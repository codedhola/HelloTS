# NODE-Typescript
To get the types for node-typescript visit [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) on github to view docs of packages types

To install a type for a package you use the @types/'package name'. This are meant to be installed as a dev dependency

example => this is to install express below

```bash
    npm install @types/express -D
```
## Express types
### The express type has the 
- Router 
- Request
- Response
- NextFunction...
  
Which could be destructed from the types from express 

### You could Infer a Response type in the your function by specifying what needs to be returned

```ts
export const getAnArtist = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    return res.json({})
}
```
This Code is specifying that the return type is meant to be a promise from the response parameter 

---




