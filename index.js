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

PLANS.forEach(plan => {
    const planContainer = document.createElement("div");
    planContainer.classList.add("plan");

    const circle = document.createElement("div");
    circle.classList.add('plan__icon');
    planContainer.appendChild(circle);

    const planName = document.createElement("h2");
    planName.textContent = plan['plan-name'];
    planName.classList.add('plan__title');
    planContainer.appendChild(planName);

    const planPriceBlock = document.createElement("div");

    const planPrice = document.createElement("span");
    planPrice.textContent = plan['annual-price'] + ' $';
    planPrice.classList.add('plan__price__amount');
    const planPriceByPeriod = document.createElement("span");
    planPriceByPeriod.textContent = ' per year';
    planPriceByPeriod.classList.add('plan__price__period');
    planPriceBlock.appendChild(planPrice);
    planPriceBlock.appendChild(planPriceByPeriod);

    planPriceBlock.classList.add('plan__price')
    planContainer.appendChild(planPriceBlock);

    const featuresList = document.createElement("ul");
    featuresList.classList.add('plan__list')

    for (var feature in plan.features) {
        const featureItem = document.createElement("li");
        featureItem.classList.add('plan__item')
        featureItem.textContent = ((plan.features[feature] ? '✔' : '✘' ) + feature);
        featuresList.appendChild(featureItem);
    }

    planContainer.appendChild(featuresList);

    const signUpButton = document.createElement("button");
    signUpButton.classList.add('plan__button')
    signUpButton.textContent = "Sign Up";
    planContainer.appendChild(signUpButton);

    container.appendChild(planContainer);
});

const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", function () {
    const yearPeriod= document.getElementById("period_mode").checked;
    console.log(1)
    updatePrices(yearPeriod);
});

function updatePrices(yearPeriod) {
    PLANS.forEach(function(plan, index) {
        const planCard = document.querySelectorAll(".plan")[index];

        const priceElement = planCard.querySelector(".plan__price__amount");
        const periodElement = planCard.querySelector(".plan__price__period");

        if (yearPeriod) {
            priceElement.textContent = plan['monthly-price'] + ' $';
            periodElement.textContent = ' per month';
        } else {
            priceElement.textContent = plan['annual-price'] + ' $';
            periodElement.textContent = ' per year';
        }
    });
}