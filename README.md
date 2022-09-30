## What We Know

- We can load an application into another application with webpack module federation
- We can boot the application:
  - with a minor change to Ember that we need to RFC/PR
  - by exposing the `<appname>.js` file through federation and importing it

## Next Steps

- [ ] Finish visit in federated mode
- [ ] RFC/PR the Ember change
- [ ] A POC addon that wraps up the federation config
- [ ] Start designing engine-config.json
- [ ] Federated vendor (needs Ed)
  - we specifically DON'T want Ember to be duplicated, so the fact that we don't automatically
    include vendor.js is a good thing
  - for normal npm dependencies, things will "just work" and we can use the shared configuration
    if we specifically want to share npm dependencies between deployable units
  - but ember packages are a special case, and we need to figure out how to handle them
- [ ] Mounting
  - Mount an entire app in a separate DOM node and don't support routing
  - Be able to use the child router as a part of the parent router
  - Mount the child router in a query param
  - Be able to mount an engine inside of the app root
  - Be able to have the engine in a sub-path of the router

## Rich's Next Steps

- Create a new Ember application with an engine
- Link it to a local Ember app
- Debug how mount and routing works
  - When does the engine get booted?
  - When does the engine application get created?
  - Does it get destroyed when the mounted route is exited?
  - What happens when the engine is mounted in a sub-route?
  - What happens when the engine is mounted in a sub-route and the parent route is exited?
- If the engine has separate dependencies, how does that work?
