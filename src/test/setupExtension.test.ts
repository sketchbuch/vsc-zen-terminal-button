import { expect } from 'chai';
import * as sinon from 'sinon';
import * as vscode from 'vscode';
import { CMD_ZEN_TERMINAL } from '../constants';
import { mockContext } from './mocks';
import { setupExtension, zenTerminalButton } from '../core/activate';

suite('setupExtension()', function() {
  test('Creates ZenTerminal button', function() {
    const spy = sinon.spy(vscode.commands, 'registerCommand');
    expect(mockContext.subscriptions.length).to.eql(0);

    setupExtension(mockContext);

    expect(mockContext.subscriptions.length).to.eql(1);
    sinon.assert.callCount(spy, 1);
    sinon.assert.calledWith(spy, CMD_ZEN_TERMINAL, zenTerminalButton);
    spy.restore();
  });
});
