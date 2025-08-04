# 🧠 Project Comments

## ⚙️ Technical Decisions

- **No charting libraries** were used (as requested).
  - All rendering is done with plain React and styled using Tailwind CSS. Initially the library 'recharts' was used but there were limitations with animation and styling (having the number labels to the right of the chart).
- **React Context** stores a country to colour mapping globally.
  - Ensures color consistency across years.
- **Bar position animation** uses `transform: translateY(...)` for smooth vertical transitions.
- **Data loaded from JSON** and filtered to top 15 countries per year.
- **Pagination** setup as a reusable hook and component for future pages.

---

## ⚠️ Technical Limitations

- Currently there is no dynamic loading or chunking — the full dataset loads on the client. This is manageable with the current dataset size but if it were to grow, the current setup would impact performance.
- There are no chart legends or labels when hovering on each bar.
- There is no playback or auto-animation when the user navigates between years — the navigation is currently manual.
- Tracking indicators are minimal — they fade immediately instead of animating.
- There is very minimal unit testing of the BarChart component to check that the data is displaying but not that it is sorted into the correct order and assigned the correct colour.

---

## 💡 Suggestions for Future Improvements

- ▶️ **Auto-play**: Add a play/pause button to add the option for the user to animate through all years.
- 📌 **Country search & pin**: Let users highlight a country across time.
- 📊 **Accessibility**: Add ARIA labels to navigation buttons.
- 🌐 **Server-side support**: Stream or pre-render data to improve performance.

