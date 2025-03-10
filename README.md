## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation & Running the App
1. Clone the repository:
   ```sh
   git clone "https://github.com/Shwetaleena/GS135790_Shwetaleena_Sahoo.git"
   cd GS135790_Shwetaleena_Sahoo
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the application:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173`

### Running Tests
**Jest tests have not been implemented yet.**

### Access the Deployed Application

You can access the live application here: (https://cosmic-swan-7dc374.netlify.app/)
---

## What I Did Well

### 1. **Dynamic AG-Grid Implementation**
- Implemented **editable AG-Grid** for Store and SKU management.
- Enabled **automatic saving** of cell edits.
- Implemented row addition functionality.

### 2. **State Management & Redux Integration**
- Integrated **Redux Toolkit** for managing Store & SKU data.
- Used **useSelector** & **useDispatch** for efficient state updates.
- 
These implementations demonstrate my ability to build **efficient, scalable, and maintainable** front-end applications.

---

## Improvements with 4 More Hours
1. **Enhance UI/UX:**
   - Improve **grid styling & responsiveness** using Material UI or Tailwind.
   - Add **inline validation** for SKU price/cost inputs.

2. **Expand Test Coverage:**
   - Write unit tests for **Redux reducers & actions**.
   - Add **integration tests** for AG-Grid updates.

3. **Implement Excel Import Functionality:**
   - Enable users to **import data from Excel**.
   - Use the **xlsx library** to parse and update the list dynamically.

4. **Optimize Performance:**
   - Use **memoization (useMemo, useCallback)** to improve grid performance.
   - Implement **lazy loading for large datasets**.

---

### Future Enhancements
- Implement **Planning Screen** with Store-SKU cross join.
- Introduce **API integration** for fetching & updating Store/SKU data.
- Implement **role-based access control** for data modifications.
