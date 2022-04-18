# restaurant-frontend

J&J's Restaurant

1. User can see menu items
2. User can select items and add to cart
3. User can see cart items and total price
4. User can see reviews
5. User can add their own review

![Menu](https://user-images.githubusercontent.com/70832391/163865754-68bbe6fa-188c-4747-83ca-7774c9f8421b.png)
![Cart](https://user-images.githubusercontent.com/70832391/163865790-a3680ea6-35cd-4450-93b3-b2a5a50672fa.png)
![Reviews](https://user-images.githubusercontent.com/70832391/163865808-591d5907-a45a-486a-9940-1b27f6c11d78.png)

J&J Restaurant Backend

Review has many users

Review has many menu_items through users

User has many reviews

User has many menu_items through reviews

Menu_item belongs to Review

Menu_item belongs to User

Cart has many menu_items
