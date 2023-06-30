 // JavaScript code for pagination functionality
        document.addEventListener("DOMContentLoaded", function() {
            const hotelItems = [
                {
                    name: "The Bake Shop",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/05/56/23/61/ibaco.jpg"
                },
                {
                    name: "The Big Chill Cakery",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcHTNLIeyoa-0ScrEDbnd7WW9ar9KidZ1A&usqp=CAU"
                },
                {
                    name: "IBACO",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBuejqka_llUmyxqf3dU_oLMhphIxHnw7bQ&usqp=CAU"
                },
                {
                    name: "Ice Cream Cakes",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://golocal247.in/wp-content/uploads/2020/07/white-foresty-cake.jpg"
                },
                {
                    name: "Blackforest Cakes",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://www.sendbestgift.com/media/images/product/798370b671021f68a49f189f96598476.webp"
                },
                {
                    name: "Breads & Pasterys",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8HpE0it35GpbCJ172anBXdgs7kiMLzMlAg&usqp=CAU"
                },
                {
                    name: "Chennai Hot Puffs",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Fast Food",
                    costForTwo: "$200",
                    image: "https://www.allrecipes.com/thmb/Q_AQmmF7A_zqqygEJIpfEGbFdB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rough-puff-ddmfs-3x4-131-54dfcc666b39480fb9cc27bdd1e45a6a.jpg"
                },
                {
                    name: "Barbeque Nation",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Fast food",
                    costForTwo: "$700",
                    image: "https://crispyfoodidea.com/wp-content/uploads/2020/10/Featured-Image-of-Barbeque-Nation-1200x1200.jpg"
                },
                {
                    name: "Shawarma Stall",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Fast Food",
                    costForTwo: "$300",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9aMsRYd3QQuat7_YDcQ9VHf2vUHSVUtknQ&usqp=CAU"
                },
                {
                    name: "Chat Items",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Street Food",
                    costForTwo: "$200",
                    image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Delhi_Style_Matar_Chaat_Matra_Recipe_Spicy__Tangy_Dry_Green_Peas_Curry_Curry_Recipe_400.jpg"
                },
                {
                    name: "Harish Backery",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cl3Ze-HIn-ghHURjExl-aiNDhxXy123rNw&usqp=CAU"
                },
                {
                    name: "Hotel Name",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/YV/WV/AW/88838772/tea-stall-counter-500x500.png"
                },
                {
                    name: "Hotel Name",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/YV/WV/AW/88838772/tea-stall-counter-500x500.png"
                },
                {
                    name: "Hotel Name",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/YV/WV/AW/88838772/tea-stall-counter-500x500.png"
                },
                {
                    name: "Hotel Name",
                    location: "Fort",
                    address: "Shop 1, Plot D, Samruudhi Complex...",
                    cuisine: "Backery",
                    costForTwo: "$700",
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/YV/WV/AW/88838772/tea-stall-counter-500x500.png"
                },
                // Add more hotel items as needed
            ];

            const itemsPerPage = 3; // Number of hotel items per page
            let currentPage = 1; // Current page

            const foodDetailsContainer = document.querySelector(".food-details");

            function renderHotelItems(startIndex, endIndex) {
                foodDetailsContainer.innerHTML = ""; // Clear existing hotel items

                for (let i = startIndex; i < endIndex; i++) {
                    const hotelItem = hotelItems[i];
                    const hotelItemHTML = `
                        <div class="hotel-item">
                            <div class="hotel-image">
                                <img src="${hotelItem.image}" alt="Hotel Image">
                            </div>
                            <div class="hotel-info">
                                <h3>${hotelItem.name}</h3>
                                <h3>${hotelItem.location}</h3>
                                <p>${hotelItem.address}</p><br>
                                <hr>
                                <pre>Cuisine:      ${hotelItem.cuisine}</pre>
                                <pre>Cost for Two: ${hotelItem.costForTwo}</pre>
                            </div>
                        </div>
                    `;
                    foodDetailsContainer.innerHTML += hotelItemHTML;
                }
            }

            function handlePageClick(pageNumber) {
                currentPage = pageNumber;
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                renderHotelItems(startIndex, endIndex);
            }

            // Pagination buttons
            const pageButtons = document.querySelectorAll(".page-button");
            pageButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const pageNumber = parseInt(this.textContent);
                    handlePageClick(pageNumber);
                });
            });

            // Initial render
            handlePageClick(currentPage);
        });