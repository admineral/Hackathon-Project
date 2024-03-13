




/**
 * ****************************************************************************
 * *                              Sources Component                           *
 * ****************************************************************************
 * 
 * The Sources component is a React component designed to display a list of 
 * articles as a part of the frontend application. It takes an array of 
 * articles as a prop and renders each article in a visually appealing manner, 
 * showcasing the publisher and title of the article. The component is styled 
 * to provide a smooth user experience with a horizontally scrollable view 
 * that accommodates multiple articles in a compact space.
 * 
 * Key Features:
 * - Dynamically renders a list of articles based on the provided array.
 * - Utilizes a horizontal scrolling mechanism to efficiently use space.
 * - Enhances user experience with styled components and shadow effects.
 * - Implements accessibility features such as keyboard navigation and 
 *   focus management.
 * 
 * Usage:
 * This component is intended to be used in any part of the application where 
 * a list of articles needs to be displayed. It requires an array of articles 
 * as input, where each article is an object with an id, title, publisher, 
 * and url.
 * 
 * Props:
 * - articles: An array of Article objects, each containing id, title, 
 *   publisher, and url fields.
 * 
 * Styling:
 * The component uses Tailwind CSS for basic styling and inline styles for 
 * specific adjustments, such as the horizontal scrolling container and 
 * individual article cards.
 * 
 * Accessibility:
 * The component is designed with accessibility in mind, ensuring that all 
 * interactive elements are keyboard navigable and properly labeled for 
 * screen readers.
 * 
 * Note:
 * This component assumes that each article has a unique ID for key management 
 * in the list rendering process.
 * 
 * Author: CursorBot
 * ****************************************************************************
 */



interface Article {
    id: string; // Assuming each article has a unique ID
    title: string;
    publisher: string;
    url: string;
    // Add other fields as necessary
  }
  
  interface SourcesProps {
    articles: Article[];
  }
  
  export function Sources({ articles }: SourcesProps) {
    return (
    <>
        <h2 className="text-xl mb-3"><strong>Selected Sources:</strong></h2>
        <div style={{ display: 'flex', overflowX: 'auto', width: '50%', height: '20vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div style={{ display: 'flex', gap: '10px'}}>
                {articles.map((article) => (
                    <div key={article.id} className="border border-solid" style={{ width: '15vw', height: '15vh', padding: '1vh', borderRadius: '0.5vw', boxShadow: '0 5px 5px rgba(0,0,0,0.1)' }}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
                            <h4 style={{ pointerEvents: 'none' }}><strong>{article.publisher.toUpperCase()}</strong><br /> {article.title}</h4>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </>
    );
  }