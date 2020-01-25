import * as vscode from 'vscode';
import { CMD_TOGGLE_TERMINAL, CMD_TOGGLE_ZEN, CMD_ZEN_TERMINAL } from '../constants';

export const zenTerminalButton = (): void => {
  vscode.commands.executeCommand(CMD_TOGGLE_ZEN);
  vscode.commands.executeCommand(CMD_TOGGLE_TERMINAL);
};

export const setupExtension = (context: vscode.ExtensionContext) => {
  const zenTerminalButtonCmd = vscode.commands.registerCommand(CMD_ZEN_TERMINAL, zenTerminalButton);
  context.subscriptions.push(zenTerminalButtonCmd);
};

const activate = (context: vscode.ExtensionContext): void => {
  setupExtension(context);
};

export default activate;
