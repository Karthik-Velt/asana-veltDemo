import { useVeltClient, VeltSidebarButton, VeltCommentTool, VeltHuddleTool, VeltPresence } from '@veltdev/react';
import { useEffect, useState } from 'react';



export default function YourDocument() {

  // Get the Velt client
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId('asana-velt-demo');
      const selectionElement = client.getSelectionElement();
      selectionElement.enableLiveSelection();
      const commentElement = client.getCommentElement();
      commentElement.disableCommentPinHighlighter();
    }
  }, [client]);

  return (
   <div style={{ display:"flex", gap:"8px", marginRight:"16px", alignItems:"center"}}>
     <VeltPresence flockMode={true}/>
     <VeltHuddleTool darkMode={true}/>
     <VeltSidebarButton darkMode={true}/>
   </div>
  );
}
