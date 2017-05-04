var app = angular.module("cg", [  ]);

app.controller("cgCtrl", function($scope) {

    $scope.dates = [];
    $scope.sites = [];
    $scope.reservations = [
        {siteId: 1, site:'Site - 1', customerId: 45, customer: 'Malcom Shah  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 2, site:'Site - 2', customerId: 41, customer: 'Ivory Ostrem  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 3, site:'Site - 3', customerId: 39, customer: 'Luci Boese  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 4, site:'Site - 4', customerId: 26, customer: 'Georgine Zahl  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 5, site:'Site - 5', customerId: 15, customer: 'Delorse Dupuy  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 6, site:'Site - 6', customerId: 19, customer: 'Magen Bernier  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 7, site:'Site - 7', customerId: 29, customer: 'Francesca Shelby  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 8, site:'Site - 8', customerId: 41, customer: 'Ivory Ostrem  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 9, site:'Site - 9', customerId: 42, customer: 'Edwardo Dople  ', start:'5/1/2017', end:'5/8/2017', status:'booked'},
        {siteId: 10, site:'Site - 10', customerId: 43, customer: 'Renaldo Sato  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 11, site:'Site - 11', customerId: 13, customer: 'Lora Millner  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 12, site:'Site - 12', customerId: 37, customer: 'Pok Jacks  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 13, site:'Site - 13', customerId: 33, customer: 'Roxana Parmelee  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 14, site:'Site - 14', customerId: 31, customer: 'Shea Petrovich  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 15, site:'Site - 15', customerId: 27, customer: 'Tony Flinchum  ', start:'5/1/2017', end:'5/6/2017', status:'booked'},
        {siteId: 16, site:'Site - 16', customerId: 24, customer: 'Flo Brittain  ', start:'5/1/2017', end:'5/6/2017', status:'booked'},
        {siteId: 17, site:'Site - 17', customerId: 31, customer: 'Shea Petrovich  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 18, site:'Site - 18', customerId: 50, customer: 'Enid Rudy  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 19, site:'Site - 19', customerId: 34, customer: 'Pia Thibault  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 20, site:'Site - 20', customerId: 19, customer: 'Magen Bernier  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 21, site:'Site - 21', customerId: 30, customer: 'Otha Meritt  ', start:'5/1/2017', end:'5/6/2017', status:'booked'},
        {siteId: 22, site:'Site - 22', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 23, site:'Site - 23', customerId: 40, customer: 'Alesia Mcgibbon  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 24, site:'Site - 24', customerId: 38, customer: 'Frankie Lacomb  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 25, site:'Site - 25', customerId: 9, customer: 'Adina Martir  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 26, site:'Site - 26', customerId: 11, customer: 'Frederick Mika  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 27, site:'Site - 27', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 28, site:'Site - 28', customerId: 28, customer: 'Delphine Coffee  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 29, site:'Site - 29', customerId: 20, customer: 'Beth Lohman  ', start:'5/1/2017', end:'5/6/2017', status:'booked'},
        {siteId: 30, site:'Site - 30', customerId: 7, customer: 'Nita Buller  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 31, site:'Site - 31', customerId: 45, customer: 'Malcom Shah  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 32, site:'Site - 32', customerId: 20, customer: 'Beth Lohman  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 33, site:'Site - 33', customerId: 34, customer: 'Pia Thibault  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 34, site:'Site - 34', customerId: 26, customer: 'Georgine Zahl  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 35, site:'Site - 35', customerId: 50, customer: 'Enid Rudy  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 36, site:'Site - 36', customerId: 27, customer: 'Tony Flinchum  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 37, site:'Site - 37', customerId: 10, customer: 'Shayla Bettencourt  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 38, site:'Site - 38', customerId: 43, customer: 'Renaldo Sato  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 39, site:'Site - 39', customerId: 21, customer: 'Kathleen Meli  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 40, site:'Site - 40', customerId: 8, customer: 'Shauna Jenson  ', start:'5/1/2017', end:'5/8/2017', status:'booked'},
        {siteId: 41, site:'Site - 41', customerId: 12, customer: 'Vesta Cotter  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 42, site:'Site - 42', customerId: 22, customer: 'Ricarda Mun  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 43, site:'Site - 43', customerId: 46, customer: 'Terrence Layne  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 44, site:'Site - 44', customerId: 44, customer: 'Emelina Gray  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 45, site:'Site - 45', customerId: 34, customer: 'Pia Thibault  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 46, site:'Site - 46', customerId: 25, customer: 'Rafaela Foulk  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 47, site:'Site - 47', customerId: 12, customer: 'Vesta Cotter  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 48, site:'Site - 48', customerId: 36, customer: 'Christen Light  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 49, site:'Site - 49', customerId: 32, customer: 'Casey Cobble  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 50, site:'Site - 50', customerId: 10, customer: 'Shayla Bettencourt  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 51, site:'Site - 51', customerId: 12, customer: 'Vesta Cotter  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 52, site:'Site - 52', customerId: 40, customer: 'Alesia Mcgibbon  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 53, site:'Site - 53', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 54, site:'Site - 54', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 55, site:'Site - 55', customerId: 44, customer: 'Emelina Gray  ', start:'5/1/2017', end:'5/6/2017', status:'booked'},
        {siteId: 56, site:'Site - 56', customerId: 38, customer: 'Frankie Lacomb  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 57, site:'Site - 57', customerId: 49, customer: 'Winnifred Onofrio  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 58, site:'Site - 58', customerId: 46, customer: 'Terrence Layne  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 59, site:'Site - 59', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 60, site:'Site - 60', customerId: 21, customer: 'Kathleen Meli  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 61, site:'Site - 61', customerId: 13, customer: 'Lora Millner  ', start:'5/1/2017', end:'5/2/2017', status:'booked'},
        {siteId: 62, site:'Site - 62', customerId: 22, customer: 'Ricarda Mun  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 63, site:'Site - 63', customerId: 25, customer: 'Rafaela Foulk  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 64, site:'Site - 64', customerId: 18, customer: 'Bertram Grave  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 65, site:'Site - 65', customerId: 28, customer: 'Delphine Coffee  ', start:'5/1/2017', end:'5/9/2017', status:'booked'},
        {siteId: 66, site:'Site - 66', customerId: 16, customer: 'Elicia Aoki  ', start:'5/1/2017', end:'5/4/2017', status:'booked'},
        {siteId: 67, site:'Site - 67', customerId: 17, customer: 'Ernest Budniewski  ', start:'5/1/2017', end:'5/5/2017', status:'booked'},
        {siteId: 68, site:'Site - 68', customerId: 24, customer: 'Flo Brittain  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 69, site:'Site - 69', customerId: 9, customer: 'Adina Martir  ', start:'5/1/2017', end:'5/10/2017', status:'booked'},
        {siteId: 70, site:'Site - 70', customerId: 13, customer: 'Lora Millner  ', start:'5/1/2017', end:'5/7/2017', status:'booked'},
        {siteId: 71, site:'Site - 71', customerId: 29, customer: 'Francesca Shelby  ', start:'5/1/2017', end:'5/3/2017', status:'booked'},
        {siteId: 1, site:'Site - 1', customerId: 5, customer: 'Angelyn Costilla  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 2, site:'Site - 2', customerId: 24, customer: 'Flo Brittain  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 3, site:'Site - 3', customerId: 26, customer: 'Georgine Zahl  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 4, site:'Site - 4', customerId: 6, customer: 'Jay Jauregui  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 5, site:'Site - 5', customerId: 11, customer: 'Frederick Mika  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 6, site:'Site - 6', customerId: 26, customer: 'Georgine Zahl  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 7, site:'Site - 7', customerId: 23, customer: 'Pablo Allende  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 8, site:'Site - 8', customerId: 34, customer: 'Pia Thibault  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 9, site:'Site - 9', customerId: 41, customer: 'Ivory Ostrem  ', start:'5/9/2017', end:'5/12/2017', status:'booked'},
        {siteId: 10, site:'Site - 10', customerId: 21, customer: 'Kathleen Meli  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 11, site:'Site - 11', customerId: 8, customer: 'Shauna Jenson  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 12, site:'Site - 12', customerId: 3, customer: 'Lauretta Tuller  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 13, site:'Site - 13', customerId: 4, customer: 'Mattie Combes  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 14, site:'Site - 14', customerId: 8, customer: 'Shauna Jenson  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 15, site:'Site - 15', customerId: 13, customer: 'Lora Millner  ', start:'5/7/2017', end:'5/12/2017', status:'booked'},
        {siteId: 16, site:'Site - 16', customerId: 39, customer: 'Luci Boese  ', start:'5/7/2017', end:'5/12/2017', status:'booked'},
        {siteId: 17, site:'Site - 17', customerId: 44, customer: 'Emelina Gray  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 18, site:'Site - 18', customerId: 48, customer: 'Hermina Irving  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 19, site:'Site - 19', customerId: 39, customer: 'Luci Boese  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 20, site:'Site - 20', customerId: 4, customer: 'Mattie Combes  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 21, site:'Site - 21', customerId: 30, customer: 'Otha Meritt  ', start:'5/7/2017', end:'5/12/2017', status:'booked'},
        {siteId: 22, site:'Site - 22', customerId: 9, customer: 'Adina Martir  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 23, site:'Site - 23', customerId: 40, customer: 'Alesia Mcgibbon  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 24, site:'Site - 24', customerId: 30, customer: 'Otha Meritt  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 25, site:'Site - 25', customerId: 46, customer: 'Terrence Layne  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 26, site:'Site - 26', customerId: 8, customer: 'Shauna Jenson  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 27, site:'Site - 27', customerId: 3, customer: 'Lauretta Tuller  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 28, site:'Site - 28', customerId: 47, customer: 'Lavonna Mccrimmon  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 29, site:'Site - 29', customerId: 44, customer: 'Emelina Gray  ', start:'5/7/2017', end:'5/12/2017', status:'booked'},
        {siteId: 30, site:'Site - 30', customerId: 1, customer: 'Dong Reimer  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 31, site:'Site - 31', customerId: 40, customer: 'Alesia Mcgibbon  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 32, site:'Site - 32', customerId: 15, customer: 'Delorse Dupuy  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 33, site:'Site - 33', customerId: 1, customer: 'Dong Reimer  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 34, site:'Site - 34', customerId: 15, customer: 'Delorse Dupuy  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 35, site:'Site - 35', customerId: 34, customer: 'Pia Thibault  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 36, site:'Site - 36', customerId: 20, customer: 'Beth Lohman  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 37, site:'Site - 37', customerId: 44, customer: 'Emelina Gray  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 38, site:'Site - 38', customerId: 33, customer: 'Roxana Parmelee  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 39, site:'Site - 39', customerId: 14, customer: 'Yang Woolwine  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 40, site:'Site - 40', customerId: 50, customer: 'Enid Rudy  ', start:'5/9/2017', end:'5/12/2017', status:'booked'},
        {siteId: 41, site:'Site - 41', customerId: 1, customer: 'Dong Reimer  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 42, site:'Site - 42', customerId: 18, customer: 'Bertram Grave  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 43, site:'Site - 43', customerId: 8, customer: 'Shauna Jenson  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 44, site:'Site - 44', customerId: 1, customer: 'Dong Reimer  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 45, site:'Site - 45', customerId: 22, customer: 'Ricarda Mun  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 46, site:'Site - 46', customerId: 6, customer: 'Jay Jauregui  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 47, site:'Site - 47', customerId: 23, customer: 'Pablo Allende  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 48, site:'Site - 48', customerId: 4, customer: 'Mattie Combes  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 49, site:'Site - 49', customerId: 46, customer: 'Terrence Layne  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 50, site:'Site - 50', customerId: 8, customer: 'Shauna Jenson  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 51, site:'Site - 51', customerId: 10, customer: 'Shayla Bettencourt  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 52, site:'Site - 52', customerId: 27, customer: 'Tony Flinchum  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 53, site:'Site - 53', customerId: 47, customer: 'Lavonna Mccrimmon  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 54, site:'Site - 54', customerId: 18, customer: 'Bertram Grave  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 55, site:'Site - 55', customerId: 32, customer: 'Casey Cobble  ', start:'5/7/2017', end:'5/12/2017', status:'booked'},
        {siteId: 56, site:'Site - 56', customerId: 7, customer: 'Nita Buller  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 57, site:'Site - 57', customerId: 29, customer: 'Francesca Shelby  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 58, site:'Site - 58', customerId: 43, customer: 'Renaldo Sato  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 59, site:'Site - 59', customerId: 47, customer: 'Lavonna Mccrimmon  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 60, site:'Site - 60', customerId: 19, customer: 'Magen Bernier  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 61, site:'Site - 61', customerId: 40, customer: 'Alesia Mcgibbon  ', start:'5/3/2017', end:'5/12/2017', status:'booked'},
        {siteId: 62, site:'Site - 62', customerId: 24, customer: 'Flo Brittain  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 63, site:'Site - 63', customerId: 22, customer: 'Ricarda Mun  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 64, site:'Site - 64', customerId: 20, customer: 'Beth Lohman  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 65, site:'Site - 65', customerId: 12, customer: 'Vesta Cotter  ', start:'5/10/2017', end:'5/12/2017', status:'booked'},
        {siteId: 66, site:'Site - 66', customerId: 46, customer: 'Terrence Layne  ', start:'5/5/2017', end:'5/12/2017', status:'booked'},
        {siteId: 67, site:'Site - 67', customerId: 34, customer: 'Pia Thibault  ', start:'5/6/2017', end:'5/12/2017', status:'booked'},
        {siteId: 68, site:'Site - 68', customerId: 32, customer: 'Casey Cobble  ', start:'5/4/2017', end:'5/12/2017', status:'booked'},
        {siteId: 69, site:'Site - 69', customerId: 41, customer: 'Ivory Ostrem  ', start:'5/11/2017', end:'5/12/2017', status:'booked'},
        {siteId: 70, site:'Site - 70', customerId: 42, customer: 'Edwardo Dople  ', start:'5/8/2017', end:'5/12/2017', status:'booked'},
        {siteId: 71, site:'Site - 71', customerId: 34, customer: 'Pia Thibault  ', start:'5/4/2017', end:'5/12/2017', status:'booked'}
    ];

    function getReservation(date, siteId){
        var ret = {};
        $scope.reservations.forEach(function(res){
           if(siteId = res.siteId && date.isBetween(res.start, res.end, 'days', '[)')) {
               ret = res;
           }
        });
        return ret;
    };

     function daysDiff(start, end){
        var endDate = moment(end);
        var startDate = moment(start);
        return endDate.diff(startDate, 'days')
    };

    $scope.zeroReservationTable = function(){
        $scope.reservationTable = {
            headers: ['Sites'],
            rows: []
        };
    };

    function blankRowBuilder(num, first){
        var arr = [first];
        for(var i=0;i<num;i++){
            arr.push('');
        }
        return arr;
    };

    $scope.daysDiff = function(start, end){
        var endDate = moment(end);
        var startDate = moment(start);
        return endDate.diff(startDate, 'days')
    };

    $scope.zeroReservationTable();

    $scope.reloadResTable = function(){
        $scope.zeroReservationTable();
        $scope.dates = [];
        $scope.sites = [];

        $scope.reservations.forEach(function(res){
            if($scope.sites.indexOf(res.site) === -1){
                $scope.sites.push(res.site);
            }

            if($scope.dates.indexOf(res.date) === -1){
                $scope.dates.push(res.date);
            }

        });

        $scope.sites.sort(function(a,b) {
            a = a.split('/').reverse().join('');
            b = b.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        });

        $scope.dates.sort(function(a,b) {
            a = a.split('/').reverse().join('');
            b = b.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        });

        $scope.dates.forEach(function(d){
            $scope.reservationTable.headers.push(d);
        })

        $scope.sites.forEach(function(site){
            $scope.reservationTable.rows.push(blankRowBuilder($scope.dates.length, site));
        });



    };

    $scope.reloadResTable();

    $scope.GetCell = function(site, dateCol){
        var ret = {};
        var dateMatch = '';

        if(dateCol < $scope.dates.length){
            dateMatch = $scope.dates[dateCol];
        }


        $scope.reservations.forEach(function(res){
           if(res.site == site && res.date == dateMatch){
               ret = res.customer;
           }
        });

        return ret;
    };

});


