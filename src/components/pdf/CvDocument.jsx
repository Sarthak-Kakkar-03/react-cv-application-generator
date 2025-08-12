import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 24 },
  h1: { fontSize: 18, marginBottom: 8 },
  line: { fontSize: 12, marginBottom: 4 },
});

export default function CVDocument({ general, education }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>General Information</Text>
          <View>
            <Text style={styles.line}>Name: {String(general?.name ?? "-")}</Text>
            <Text style={styles.line}>Email: {String(general?.email ?? "-")}</Text>
            <Text style={styles.line}>Phone: {String(general?.phone ?? "-")}</Text>
          </View>

          <Text style={styles.h1}>Education</Text>
          <View>
            {Array.isArray(education) && education.length > 0 ? (
              education.map((item, idx) => (
                <View key={String(item?.id ?? idx)} style={{ marginBottom: 6 }}>
                  <Text style={styles.line}>Name: {String(item?.name ?? "-")}</Text>
                  <Text style={styles.line}>Date: {String(item?.date ?? "-")}</Text>
                  <Text style={styles.line}>
                    Description: {String(item?.description ?? "-")}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.line}>—</Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}
