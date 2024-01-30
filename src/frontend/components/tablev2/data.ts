export async function fetchRule() {
    try {  
      const res = await fetch('http://localhost:8000/rule/all', { 
          next: {
            revalidate: 3600
          },
        });  
      return res.json();
    } catch (error) {
      console.error('API Error:', error);
      throw new Error('Failed to fetch rule data.');
    }
  }
  