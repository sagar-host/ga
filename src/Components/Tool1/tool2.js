import { FacebookProvider, EmbeddedPost } from 'react-facebook';


export default function EmbeddedPostExample() {
  return (
    <FacebookProvider appId="421048223348918">
   
      <EmbeddedPost href="https://www.facebook.com/photo/?fbid=3295444647449236&set=a.1377478522579201" width="500" />
    
    </FacebookProvider>
  );
}
