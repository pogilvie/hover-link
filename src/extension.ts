import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	let hoverRegistration = vscode.languages.registerHoverProvider('markdown', {
		provideHover(document, position, token) {
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);
			const map = {
				fox: 'https://en.wikipedia.org/wiki/Fox',
				dog: 'https://en.wikipedia.org/wiki/Dog'
			};
			return new vscode.Hover((map as any)[word]);
		}
	});

	context.subscriptions.push(hoverRegistration);
}

export function deactivate() {}
