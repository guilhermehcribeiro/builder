export const responseGetAddress = (data: any) => ({
  data: data
    ? data?.data.map((value: any) => ({
        street_name: value?.label
      }))
    : []
});
