import { List } from "semantic-ui-react";

const Roadmap = () => (
  <List className="roadmap-list">
    <List.Item className="list-headline">
      <List.Icon name="check" color="green" />
      <List.Content>Improve UI</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">
        Add Icons inside buttons
      </List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Improve tables view</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Improve responsive</List.Content>
    </List.Item>
    <List.Item className="list-headline">
      <List.Icon name="check" color="green" />
      <List.Content>Code</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">
        Insert API Reference in a separate file
      </List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Add Email field</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Add Address field</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Add Form Validation</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="check" color="green" />
      <List.Content className="line-through">Fix Form Validation</List.Content>
    </List.Item>
    <List.Item className="pl-2">
      <List.Icon name="edit" color="blue" />
      <List.Content>Add Search feature on tables</List.Content>
    </List.Item>
  </List>
);

export default Roadmap;
