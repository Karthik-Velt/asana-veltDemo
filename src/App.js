import { VeltProvider, VeltComments, VeltCommentsSidebar, VeltCursor, VeltHuddle} from '@veltdev/react';
import YourAuthComponent from './components/YourAuthComponent';
import YourDocument from './components/YourDocument';

function App() {


  return (
    <VeltProvider apiKey="LGZQBMcI0IqZdaNGgwF3">
      <VeltHuddle/>
      <VeltCursor />
      <VeltComments textMode={true} sidebarButtonOnCommentDialog={true} autoCategorize={true}/>
      <VeltCommentsSidebar />
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>

  );
}

export default App;

