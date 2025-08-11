import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 24 },
  h1: { fontSize: 18, marginBottom: 8 },
  line: { fontSize: 12, marginBottom: 4 },
});

export default function CvDocument({ general }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>General Information</Text>
        <View>
          <Text style={styles.line}>Name: {general.name || "-"}</Text>
          <Text style={styles.line}>Email: {general.email || "-"}</Text>
          <Text style={styles.line}>Phone: {general.phone || "-"}</Text>
        </View>
      </Page>
    </Document>
  );
}
