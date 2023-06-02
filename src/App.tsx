import { MantineProvider, Text } from "@mantine/core";
function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Text>Trying Mantine</Text>
    </MantineProvider>
  );
}

export default App;
