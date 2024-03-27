import { VeltProvider, VeltComments, VeltCommentsSidebar, VeltCursor, VeltHuddle} from '@veltdev/react';
import YourAuthComponent from './components/YourAuthComponent';
import YourDocument from './components/YourDocument';

function App() {


  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltHuddle/>
      <VeltCursor />
      <VeltComments textMode={false} sidebarButtonOnCommentDialog={true} autoCategorize={true} popoverMode={true} dialogOnHover={false}/>
      <VeltCommentsSidebar />
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>

  );
}

export default App;

