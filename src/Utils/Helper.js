export function FilterData(searchText, allRestaurant) {
  const filter = allRestaurant.filter((el) =>
    el?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filter;
}
