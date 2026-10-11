---
name: Feature request
description: Propose an improvement that fits the zero-backend architecture
labels: [enhancement]
body:
  - type: textarea
    id: problem
    attributes:
      label: Problem
      description: What can't you do today?
    validations:
      required: true
  - type: textarea
    id: proposal
    attributes:
      label: Proposal
      description: What should change? Note that backend/auth/DB need a design doc first (see AGENTS.md).
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives considered
