# TODO for Adding Filter Panel UI

## index.html
- Add a filter panel container div below the "filter" button inside the .filters-row container.
- Add form controls for:
  - Price range: min and max input fields (number inputs)
  - Sale or Rent: select dropdown with 'Sale' and 'Rent' options
  - Property condition: select dropdown (e.g., New, Used, Renovated)
  - Bedrooms: select dropdown (e.g., 1, 2, 3, 4+)
  - Bathrooms: select dropdown (e.g., 1, 2, 3, 4+)
  - Furnished: select dropdown (Yes, No)
  - Location: text input for free text location filtering
- Add simple JavaScript inline to toggle filter panel visibility on clicking the "filter" button.

## style.css
- Add styling for the filter panel container (box, padding, border-radius, background etc.)
- Style form controls in filter panel (inputs, selects) with padding, margin, border-radius
- Style open/close states or transitions for the filter panel if required.

## Followup
- Verify UI visually in browser after changes.
- Test filter button toggling works as expected.
