const Footer = ({ total }) => (
  <tfoot>
    <tr>
      <td colSpan="3" style={{ textAlign: 'center' }}>
        Total de Pokémons: {total}
      </td>
    </tr>
  </tfoot>
);

export default Footer;
