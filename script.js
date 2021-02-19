let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor.-Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon",
"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
"When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
"Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
"It is during our darkest moments that we must focus to see the light. -Aristotle",
"Whoever is happy will make others happy too. -Anne Frank",
"Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
"A coward is incapable of exhibiting love; it is the prerogative of the brave.- Mahatma Gandhi",
"Facts are facts and will not disappear on account of your likes.-Jawaharlal Nehru",
"Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",
"GOD is to be worshipped as the one beloved, dearer than everything in this and next life.-Swami Vivekanand",
"Freedom is not worth having if it does not include the freedom to make mistakes. -Mahatma Gandhi",
"The most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. -Anne Frank",
"An unexamined life is not worth living. -Socrates",
"Everything you've ever wanted is on the other side of fear. -George Addair",
"External nature is only internal nature writ large.-Swami Vivekanand",
"We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.― Jawaharlal Nehru",
"I would rather die of passion than of boredom. -Vincent van Gogh",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"Evil unchecked grows, evil tolerated poisons the whole system.― Jawaharlal Nehru",
"GOD is the ever-active providence, by whose power systems after systems are being evolved out of chaos, made to run for a time and again destroyed.-Swami Vivekanand",
"I will not let anyone walk through my mind with their dirty feet. -Mahatma Gandhi",
"Nobody can hurt me without my permission.- Mahatma Gandhi",
"Service which is rendered without joy helps neither the servant nor the served.- Mahatma Gandhi",
"If money help a man to do good to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.-Swami Vivekanand",
"If we are to teach real peace in this world, and if we are to carry on a real war against war, we shall have to begin with the children.-Mahatma Gandhi",
"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle",
"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. -Mark Twain",
"If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. We need not wait to see what others do. -Mahatma Gandhi",
];

btn.addEventListener('click',function(){
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
	output.innerHTML = randomQuote;
})