export const columns = [
  {
    title: "Идентификатор",
    dataIndex: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: "Название",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Ссылка на википедию",
    dataIndex: "wikipedia_url",
  },
  {
    title: "Темперамент",
    dataIndex: "temperament",
  },
];
