#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const input = await readInput();
const eventName = input.hook_event_name;

if (!eventName) {
  process.exit(0);
}

const policyUrl = new URL("../ANALYSIS-DEPTH-POLICY.md", import.meta.url);
const policy = await readFile(policyUrl, "utf8");

const contexts = {
  SessionStart: [
    "The following is an active, model-level operating policy for this SaldeoSMART session.",
    "Apply it before substantive analyses, reports, recommendations, research, plans, deliverables, and tasks.",
    policy,
  ].join("\n\n"),
  UserPromptSubmit: [
    "Analysis Depth Gate is active for this prompt.",
    "For a new substantive analysis, report, recommendation, research, plan, deliverable, or task, verify that the user selected C-level recap, Raport, or Raport pogłębiony.",
    "If no level is selected and no valid level is already active for this same task, ask the single three-option gate question and wait before doing substantive work.",
    "Do not ask again for a follow-up in the same task, an explicit mode selection, a simple factual/status request, a clarification, a correction, or a purely mechanical operation.",
  ].join(" "),
  SubagentStart: [
    "Analysis Depth Gate applies to this subagent.",
    "Inherit the level selected by the orchestrating agent and match research depth, evidence, critical review, option detail, and output shape to it.",
    "Do not ask the user again. If no level is present in a non-interactive subtask, use Raport and explicitly report that assumption to the parent.",
  ].join(" "),
};

const additionalContext = contexts[eventName];

if (!additionalContext) {
  process.exit(0);
}

process.stdout.write(JSON.stringify({
  suppressOutput: true,
  hookSpecificOutput: {
    hookEventName: eventName,
    additionalContext,
  },
}));

async function readInput() {
  let rawInput = "";

  for await (const chunk of process.stdin) {
    rawInput += chunk;
  }

  if (!rawInput.trim()) {
    return {};
  }

  try {
    return JSON.parse(rawInput);
  } catch {
    return {};
  }
}