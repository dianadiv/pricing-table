const PLANS = [
    {
        'plan-name': 'Basic',
        'monthly-price': 20,
        'annual-price': 300,
        'features': {
            'Access to all features': false,
            'Email support': false,
            'Additional info': false,
            'Remote access': true,
            'Public rating': true,
        }
    },
    {
        'plan-name': 'Standard',
        'monthly-price': 35,
        'annual-price': 400,
        'features': {
            'Access to all features': false,
            'Email support': true,
            'Additional info': false,
            'Remote access': true,
            'Public rating': true,
        }
    },
    {
        'plan-name': 'Premium',
        'monthly-price': 50,
        'annual-price': 550,
        'features': {
            'Access to all features': true,
            'Email support': true,
            'Additional info': true,
            'Remote access': true,
            'Public rating': true,
        }
    }
]

const container = document.getElementById("plans-container");

const btnContainer = document.querySelector(".btn-container");

function updatePrices() {
    container.innerHTML = '';

    PLANS.forEach(plan => {
        const yearPeriod= document.getElementById("period_mode").checked;
        
        const planContainer = document.createElement("div");
        planContainer.classList.add("plan");
    
        const circle = document.createElement("div");
        circle.classList.add('plan__icon');
        planContainer.appendChild(circle);
    
        const planName = document.createElement("h2");
        planName.textContent = plan['plan-name'];
        planName.classList.add('plan__title');
        planContainer.appendChild(planName);
    
        const planPrice = document.createElement("div");
        planPrice.classList.add('plan__price');
        const planPriceAmount = document.createElement("span");
        planPriceAmount.classList.add('plan__price__amount');
        const planPricePeriod = document.createElement("span");
        planPricePeriod.classList.add('plan__price__period');

        if (yearPeriod) {
            planPriceAmount.textContent = plan['monthly-price'] + ' $'; 
            planPricePeriod.textContent = ' per month';
        } else {
            planPriceAmount.textContent = plan['annual-price'] + ' $'; 
            planPricePeriod.textContent = ' per year';
        }

        planPrice.appendChild(planPriceAmount);
        planPrice.appendChild(planPricePeriod);
    
        planContainer.appendChild(planPrice);

        const featuresTitle = document.createElement("p");
        featuresTitle.textContent = 'Features'
        featuresTitle.classList.add('plan__features');

        planContainer.appendChild(featuresTitle);
    
        const featuresList = document.createElement("ul");
        featuresList.classList.add('plan__list')
    
        for (var feature in plan.features) {
            const featureItem = document.createElement("li");
            featureItem.classList.add('plan__item')
            featureItem.textContent = ((plan.features[feature] ? '✔ ' : '✘ ' ) + feature);
            featuresList.appendChild(featureItem);
        }
    
        planContainer.appendChild(featuresList);
    
        const signUpButton = document.createElement("button");
        signUpButton.classList.add('plan__button')
        signUpButton.textContent = "Sign Up";
        planContainer.appendChild(signUpButton);
    
        container.appendChild(planContainer);
    });
}

btnContainer.addEventListener("click", function () {
    updatePrices();
});

updatePrices();