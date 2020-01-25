import * as sinon from 'sinon';
import * as vscode from 'vscode';
import { CMD_TOGGLE_TERMINAL, CMD_TOGGLE_ZEN } from '../constants';
import { zenTerminalButton } from '../core/activate';

suite('zenTerminalButton()', function() {
  test('Toggles Zen Mode and integrated Terminal', function() {
    const stub = sinon.stub(vscode.commands, 'executeCommand');
    zenTerminalButton();

    sinon.assert.callCount(stub, 2);
    sinon.assert.calledWith(stub.firstCall, CMD_TOGGLE_ZEN);
    sinon.assert.calledWith(stub.lastCall, CMD_TOGGLE_TERMINAL);
    stub.restore();
  });
});
