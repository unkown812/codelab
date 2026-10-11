---
name: Bug report
description: Something in the app doesn't work as documented
labels: [bug]
body:
  - type: textarea
    id: what
    attributes:
      label: What happened
      description: What you saw vs. what you expected
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: Steps to reproduce
      description: URL, language/runtime if relevant, exact clicks
    validations:
      required: true
  - type: input
    id: env
    attributes:
      label: Environment
      description: Browser + version, OS, Node version if local dev
  - type: checkboxes
    id: checks
    attributes:
      label: Checks
      options:
        - label: I reproduced this on the latest `master`
