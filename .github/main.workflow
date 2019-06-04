workflow "Build and test on push" {
  on = "push"
  resolves = ["Test packages"]
}

action "Root npm ci" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
}

action "Packages npm ci" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Root npm ci"]
  args = "run ci"
}

action "Build packages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Packages npm ci"]
  args = "run build"
}

action "Test packages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build packages"]
  args = "run test"
}
