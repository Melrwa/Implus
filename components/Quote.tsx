import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';


const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      console.error('Error fetching quote:', err);
    }
  };

  useEffect(() => {
    fetchQuote(); // initial fetch

    const interval = setInterval(() => {
      fetchQuote(); // fetch every 2 minutes
    }, 120000); // 2 mins in ms

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <View >
        <Text className="text-sm font-bold italic text-center text-black mb-2">
          “{quote}”
        </Text>
        <Text className="text-sm text-right  italic font-medium text-[#0D9276]">
          ~ {author}
        </Text>

      <View className="h-[1px] bg-[#0D9276] " />
      </View>
  );
};

export default Quote;
