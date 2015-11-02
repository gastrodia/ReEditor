ReEditorView = require './re-editor-view'
{CompositeDisposable} = require 'atom'

module.exports = ReEditor =
  reEditorView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @reEditorView = new ReEditorView(state.reEditorViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @reEditorView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 're-editor:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @reEditorView.destroy()

  serialize: ->
    reEditorViewState: @reEditorView.serialize()

  toggle: ->
    console.log 'ReEditor was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
