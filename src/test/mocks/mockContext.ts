import * as vscode from 'vscode';

const mockContext = {
  asAbsolutePath: (relativePath: string) => relativePath,
  extensionPath: 'some/path',
  globalState: {
    get: (key: string) => {},
    update: (key: string, value: any) => {},
  } as vscode.Memento,
  globalStoragePath: '',
  logPath: '',
  storagePath: '',
  subscriptions: [],
  workspaceState: {} as vscode.Memento,
} as vscode.ExtensionContext;

export default { ...mockContext };
