# Amagwinya Scones - Menu Management App
1. *Menu Item Management*
   - Add menu items with dish name, description, course, and price
   - Predefined course list (starter, main, dessert)
   - Form validation for all fields

2. *Home Screen*
   - Displays total number of menu items
   - Navigation buttons for each course (STARTER, MAIN, DESSERT)
   - Add menu item button
   - Filter by course button

3. *Multiple Screens*
   - *Home Screen*: Main navigation hub
   - *Category Screen*: Shows dishes for selected course
   - *Add Menu Item Screen*: Form to add new dishes
   - *Filter by Course Screen*: Filter and view items by course

4. *User Interface*
   - Clean, modern design matching the provided wireframes
   - Consistent color scheme and typography
   - Responsive layout
   - Intuitive navigation

## Project Structure


Amagwinya_Scones/
├── App.tsx                 # Main app with navigation
├── types.ts               # TypeScript interfaces
├── context/
│   └── MenuContext.tsx    # State management for menu items
├── screens/
│   ├── HomeScreen.tsx     # Main menu screen
│   ├── CategoryScreen.tsx # Course-specific dishes
│   ├── AddMenuItemScreen.tsx # Add new menu item
│   └── FilterByCourseScreen.tsx # Filter functionality
├── components/
│   └── Header.tsx         # Reusable header component
└── assets/                # Images and icons


## How to Run

1. *Install dependencies* (if not already done):
   bash
   npm install
   

2. *Start the development server*:
   bash
   npm start
   

3. *Run on different platforms*:
   - Web: npm run web
   - Android: npm run android (requires Android Studio/emulator)
   - iOS: npm run ios (requires macOS)

## App Flow

1. *Home Screen*: Shows total menu items and course navigation
2. *Course Selection*: Tap STARTER/MAIN/DESSERT to view dishes
3. *Add Items*: Use "Add Menu Item" button to create new dishes
4. *Filter*: Use "Filter by Course" to view items by category
5. *Navigation*: Back buttons and header navigation throughout

## Technical Implementation

- *React Navigation*: Stack navigation for multiple screens
- *Context API*: State management for menu items
- *TypeScript*: Type safety throughout the app
- *Expo*: Cross-platform development framework
- *React Native*: Native mobile app development

## Sample Data

The app comes with sample menu items:
- Pea Soup (Starter) - $8.99
- Steak (Main) - $24.99  
- Chocolate Mousse (Dessert) - $6.99

## Requirements Met

✅ Chef can enter menu items with dish name, description, course, and price  
✅ Predefined list of courses (starter, main, dessert)  
✅ Home screen displays the menu  
✅ Home screen shows total number of menu items  
✅ Multiple screens implementation  
✅ Working application ready for demonstration  

## Next Steps

The app is ready for:
- Video demonstration
- GitHub repository submission
- Further development and enhancements
