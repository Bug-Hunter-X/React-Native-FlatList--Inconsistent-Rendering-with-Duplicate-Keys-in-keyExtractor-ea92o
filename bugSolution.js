To fix this, ensure that your `keyExtractor` function returns a unique identifier for each item.  Here's how you can improve the code:

```javascript
import { uuid } from 'uuidv4'; // You'll need to install this package: npm install uuidv4

<FlatList
  data={[{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }]}
  keyExtractor={(item, index) => uuid()}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

This updated code uses the `uuid` library to generate a universally unique identifier for each item.  Alternatively, if you have a unique identifier in your data (like a database ID), you should use that instead:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

Remember to handle the case where your data might contain objects that don't have a unique identifier by implementing a more robust key generation strategy.  The index should only be used as a last resort because it will cause problems when the order of your data changes.