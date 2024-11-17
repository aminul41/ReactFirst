function NoteAppInputForm({
  editMode,
  dataTitle,
  setDataTitle,
  updateHandler,
  createData,
}) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          editMode ? updateHandler(event) : createData(event);
        }}
      >
        <input
          type="text"
          value={dataTitle}
          onChange={(e) => setDataTitle(e.target.value)}
          placeholder="Add your notes..."
        />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>
    </div>
  );
}

export default NoteAppInputForm;
